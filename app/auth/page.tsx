'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function AuthPage() {
  const [accessKey, setAccessKey] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      Cookies.set('access_key', accessKey, { expires: 7 }) 
      router.push('/')
      router.refresh()
    } catch (err) {
      setError(`Invalid access key ${err}`)
    }
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-primary">
          Access Required
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label 
              htmlFor="accessKey" 
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Enter Access Key
            </label>
            <input
              type="password"
              id="accessKey"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your access key"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-secondary-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-primary/90 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}