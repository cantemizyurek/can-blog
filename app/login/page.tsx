import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Page() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form
        className="flex flex-col space-y-4 border rounded-md border-rose-100 p-3"
        action={async formData => {
          'use server'

          const password = formData.get('password')

          if (password === 'cantemizyurek') {
            cookies().set('admin', 'cantemizyurek')
            redirect('/admin')
          }
        }}
      >
        <h1 className="text-3xl font-semibold text-center">Yoo Welcome Can</h1>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="border-b-2 border-gray-300 bg-transparent pb-2 w-full outline-none focus:border-blue-500 text-lg"
        />
        <button
          type="submit"
          className="bg-rose-100 text-zinc-900 px-4 py-2 rounded-md hover:bg-rose-200 font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  )
}
