import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_KEY environment variables.')
  console.error('Create a .env file with:')
  console.error('  SUPABASE_URL=https://your-project.supabase.co')
  console.error('  SUPABASE_KEY=your-anon-key')
  process.exit(1)
}

async function testConnection() {
  console.log(`Connecting to Supabase: ${supabaseUrl}`)
  const supabase = createClient(supabaseUrl, supabaseKey)

  // Test 1: Auth health check
  console.log('\n--- Test 1: Auth service ---')
  try {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
      console.error('Auth error:', error.message)
    } else {
      console.log('Auth service: OK (session retrieved)')
    }
  } catch (e: any) {
    console.error('Auth service: FAILED -', e.message)
  }

  // Test 2: REST API (try listing tables via a simple query)
  console.log('\n--- Test 2: REST API ---')
  try {
    const { data, error, status } = await supabase.from('_test_connection').select('*').limit(1)
    if (error && error.code === '42P01') {
      // Table doesn't exist, but the API responded - connection works
      console.log('REST API: OK (API responded, table does not exist as expected)')
    } else if (error) {
      console.log(`REST API: OK (API responded with code: ${error.code}, message: ${error.message})`)
    } else {
      console.log('REST API: OK (query succeeded)')
    }
  } catch (e: any) {
    console.error('REST API: FAILED -', e.message)
  }

  // Test 3: Realtime connection check
  console.log('\n--- Test 3: Database query ---')
  try {
    const { data, error, count } = await supabase.from('information_schema.tables').select('*', { count: 'exact', head: true })
    if (error) {
      console.log(`Database: Responded (${error.code}: ${error.message})`)
    } else {
      console.log(`Database: OK (tables count: ${count})`)
    }
  } catch (e: any) {
    console.error('Database: FAILED -', e.message)
  }

  console.log('\n--- Connection test complete ---')
}

testConnection()
