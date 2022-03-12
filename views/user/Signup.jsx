const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Signup extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <main className="form-signin signinpage d-flex justify-content-center">
                    <form action="/user/signup" method="post">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-journal"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                        <h1 className="h3 mb-3 fw-normal">Please Create Account</h1>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" name="username" required placeholder="name@example.com"/>
                            <label for="floatingInput">Email Address:</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" name="password" required placeholder="Password"/>
                            <label for="floatingPassword">Password:</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" value="Create Account">Create Account</button>
                        <p className="mt-5 mb-3 text-muted">© 2022-2022</p>
                    </form>
                </main>
            </DefaultLayout>
        )
    }
}

module.exports = Signup