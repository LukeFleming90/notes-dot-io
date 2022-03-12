const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Login extends React.Component {
    render() {
        return (
            <DefaultLayout>
                {/* <main className="form-signin signinpage d-flex justify-content-center">
                    <form action="/user/login" method="post">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-cup-straw"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/>
                        </svg>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    
                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Password</label>
                        </div>
                    
                        <button className="w-100 btn btn-lg btn-primary" type="submit" value="Login">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2022-2022</p>
                    </form>
                </main> */}
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
                            <input type="text" className="form-control" id="floatingPassword" placeholder="Password" name="password" required/>
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