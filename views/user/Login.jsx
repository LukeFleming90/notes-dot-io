const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Login extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="form-signin signinpage d-flex justify-content-center">
                    <form action="/user/login" method="post">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-journal"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                        <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="username" required/>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" required/>
                            <label for="floatingPassword">Password</label>
                        </div>

                        {/* <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text" placeholder="name@example.com" name="username" required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" required class="form-control" id="exampleInputPassword1"/>
                        </div> */}
                        <button type="submit" className="w-100 btn btn-lg btn-primary" value="Login">Submit</button>
                        <p className="mt-5 mb-3 text-muted">© 2022-2022</p>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Login