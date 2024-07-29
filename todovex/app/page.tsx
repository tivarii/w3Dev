import { signInAction } from "@/actions/auth-action";
import Tasks from "@/components/todovex/tasks";



export default function Home() {
  return (
    <main>
      <h1>LogIn</h1>
      <form action={signInAction}>
        <button>Log In</button>
      </form>
    </main>

  );
}
