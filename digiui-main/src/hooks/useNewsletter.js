import { useState } from "react";
import toast from "react-hot-toast";
import { subscribeNewsletter } from "../api/contactApi";

export const useNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: replace mock with: await subscribeNewsletter({ email });
      await new Promise((r) => setTimeout(r, 800));
      setIsSubscribed(true);
      setEmail("");
      toast.success("You're subscribed! Welcome to DigiMantra.");
    } catch (error) {
      toast.error(error.message || "Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { email, setEmail, handleSubscribe, isSubmitting, isSubscribed };
};
