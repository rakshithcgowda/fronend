import React, { useContext } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../backend/context/Auth'

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)

    const res = await fetch('http://localhost:8000/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await res.json()

    if (result.status === false) {
      toast.error(result.message)
      return
    } else {
      const userInfo = {
        token: result.token,
        user: result.user,
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      login(userInfo)
      navigate('/admin/dashboard')
      toast.success(result.message)
    }
    console.error(result)
  }

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          {/* Center the row */}
          <div className="row justify-content-center">
            {/* Control column width on various breakpoints */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="mb-3">Login Here</h4>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        {...register('email', {
                          required: 'This field is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        aria-describedby="emailHelp"
                      />
                      {errors.email && (
                        <p className="invalid-feedback">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        {...register('password', { required: 'This field is required' })}
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                      />
                      {errors.password && (
                        <p className="invalid-feedback">{errors.password.message}</p>
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Login
