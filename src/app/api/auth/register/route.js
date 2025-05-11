import User from "../../../models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "../../../lib/mongodb";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { username, email, password } = body;

    console.log(email, password);

    const existEmail = await User.findOne({ email });
    console.log(existEmail);

    if (existEmail) {
      return NextResponse.json(
        { message: "Email already exist" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
