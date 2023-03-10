import "./App.css";

function App() {
  return (
    <div>
      <form
        name="contact v3"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        netlify-honeypot="bot-field"
        netlify
        type="hidden"
      >
        <input type="hidden" name="form-name" value="contact v3" />

        <div hidden>
          <input name="bot-field" />
        </div>

        <div>
          <label>
            First name
            <br />
            <input type="text" name="first-name" />
          </label>
        </div>

        <div>
          <label>
            Last name
            <br />
            <input type="text" name="last-name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label>
            Any Comments?
            <br />
            <textarea name="comments"></textarea>
          </label>
        </div>

        <button type="submit">Submit The Results</button>
      </form>
    </div>
  );
}

export default App;
