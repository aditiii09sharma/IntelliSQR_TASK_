// src/components/LoginForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

type LoginFormData = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver:  zodResolver(schema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", data);
      alert(res.data.message);
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-sm mx-auto mt-20 p-4 border shadow rounded">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <div>
        <label>Email</label>
        <input type="email" {...register("email")} className="w-full border p-2 rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input type="password" {...register("password")} className="w-full border p-2 rounded" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
    </form>
  );
}
