import m, { ClosureComponent, Component } from "mithril";
import * as store from "./store";
import * as notifications from "./notifications";

const component: ClosureComponent = (): Component => {
  const BaseURL =  window.location.hostname || "localhost";
  return {
    view: () => {
      if (window.username) {
        return m(
          "button.user-menu",
          m(
            "a",
            {
              title: "Logout",
              onclick: (e) => {
                e.target.disabled = true;
                store
                  .logOut()
                  .then(() => {
                    window.location.href = `http://${BaseURL}:3001/log-in`;
                  })
                  .catch((err) => {
                    e.target.disabled = false;
                    notifications.push("error", err.message);
                  });
                return false;
              },
            },
            m("i.material-icons", "exit_to_app")
          )
        );
      } else {
        return m(
          "div.user-menu",
          m(
            "a",
            {
              href: "/log-in",
            },
            "Log in"
          )
        );
      }
    },
  };
};

export default component;
