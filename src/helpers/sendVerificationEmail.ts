import { resend } from "@/lib/resend";
import VerificationEmail from "@/components/emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "thakur.100xdevs@gmail.com",
      subject: "Hello World",
      react: VerificationEmail({username , otp : verifyCode}),
    });

    return {
      success: true,
      message: "verification email sent successfully",
    };
  } catch (emailError) {
    console.error("error sending verification email");
    return {
      success: false,
      message: "failed to send verification email",
    };
  }
}
