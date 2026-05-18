export default function Page() {
  return (
    <div className="loginDiv">
      <form className="loginForm" method="POST" action="/login">
        
        <table className="loginTable">
          <tbody>

            <tr>
              <td id="username_label" className="loginTableCol1">Username:</td>
              <td className="loginTableCol2">
                <input id="username" name="username" type="text" />
              </td>
            </tr>

            <tr>
              <td id="password_label" className="loginTableCol1">Password:</td>
              <td className="loginTableCol2">
                <input id="password" name="password" type="password" />
              </td>
            </tr>

            <tr>
              <td className="loginTableCol1"></td>
              <td className="loginTableCol2">
                <input id="submit" name="submit" type="submit" value="Log in" />
                <input id="cancel" name="cancel" type="button" value="Cancel" />
              </td>
            </tr>

          </tbody>
        </table>

      </form>
    </div>

  );
}
