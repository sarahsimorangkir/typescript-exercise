type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};
//use type when build an app and interface for library
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} ! You Have ${props.messageCount} unread messages</h2>`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
