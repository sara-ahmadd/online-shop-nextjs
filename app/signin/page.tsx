import { getProviders, signIn } from "next-auth/react";
import Input from "./components/Input";
import SigninBtn from "./components/SigninBtn";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { getUserData } from "@/lib/user/getUser";

export default async function SignIn() {
  const providers = (await getProviders()) ?? [];
  const session = await getServerSession(options);
  return (
    <div className="flex flex-col justify-start items-start gap-5 bg-slate-200 rounded-md shadow-md p-4">
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <SigninBtn
            val={provider.name}
            action={async () => {
              "use server";
              signIn(provider.id).then(async (res) => {
                if (res?.ok) {
                  const u = await getUserData(session?.user?.email ?? "");
                }
              });
            }}
          />
        </div>
      ))}
      <Input />
    </div>
  );
}
