import { useSelector } from "react-redux";

function EdituserForm() {
  const user = useSelector((state) => state.users.user);

  return (
    <form action="user-profile">
      <label htmlFor="username">
        <input
          type="text"
          name="username"
          placeholder={user && user.username}
        />
      </label>
      <label htmlFor="full_name">
        <input
          type="text"
          name="full_name"
          placeholder={user && user.full_name}
        />
      </label>
      <label htmlFor="password">
        <input type="password" name="password" placeholder="change password" />
      </label>
      <label htmlFor="password_confirmation">
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
        />
      </label>
      <label htmlFor="save">
        <input id="save-button" type="button" value="Save" />
      </label>
    </form>
  );
}

export default EdituserForm;
