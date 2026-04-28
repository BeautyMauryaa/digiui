import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

export const useLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 1. State for the dynamic captcha
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, total: 0 });

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ num1: n1, num2: n2, total: n1 + n2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // 2. Memoize the schema so it updates when captcha.total changes
  const leadSchema = useMemo(() => z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Valid phone number required"),
    requirements: z.string().optional(),
    acceptPolicy: z.literal(true, {
      errorMap: () => ({ message: "Please accept the policy" }),
    }),
    captchaAnswer: z.string().refine((val) => parseInt(val) === captcha.total, {
      message: "Incorrect answer",
    }),
  }), [captcha.total]);

  const form = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      requirements: "",
      acceptPolicy: false,
      captchaAnswer: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Submitting:", data);
      toast.success("Thank you! We'll connect soon.");
      
      form.reset();
      generateCaptcha(); // Refresh captcha after successful submit
    } catch (error) {
      toast.error("Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Return captcha state so the UI can display {captcha.num1} + {captcha.num2}
  return { 
    form, 
    onSubmit: form.handleSubmit(onSubmit), 
    isSubmitting, 
    captcha 
  };
};