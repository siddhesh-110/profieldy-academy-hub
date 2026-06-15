import { useState, ReactNode } from "react";
import { z } from "zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Calendar, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  academyName: z.string().trim().min(1, "Academy name is required").max(150),
  academyAddress: z.string().trim().min(1, "Academy address is required").max(300),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(50),
  contactMethod: z.enum(["email", "phone", "whatsapp"], {
    required_error: "Select a preferred contact method",
  }),
});

type FormState = {
  name: string;
  academyName: string;
  academyAddress: string;
  email: string;
  contactMethod: "email" | "phone" | "whatsapp" | "";
};

const initialState: FormState = {
  name: "",
  academyName: "",
  academyAddress: "",
  email: "",
  contactMethod: "",
};

interface BookDemoDialogProps {
  children: ReactNode;
}

export const BookDemoDialog = ({ children }: BookDemoDialogProps) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const { error } = await supabase.from("demo_requests").insert({
      name: result.data.name,
      academy_name: result.data.academyName,
      academy_address: result.data.academyAddress,
      email: result.data.email,
      contact_method: result.data.contactMethod,
    });

    setSubmitting(false);

    if (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again in a moment.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Demo request received",
      description: "Thanks! Our team will reach out to you shortly.",
    });
    setForm(initialState);
    setOpen(false);
  };

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display text-2xl">
            <Calendar className="h-5 w-5 text-brand-blue" />
            Book a Free Demo
          </DialogTitle>
          <DialogDescription>
            Tell us about your academy and we'll set up a personalized walkthrough.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bd-name">Your name</Label>
            <Input
              id="bd-name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              maxLength={100}
              placeholder="Jane Doe"
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bd-academy">Academy name</Label>
            <Input
              id="bd-academy"
              value={form.academyName}
              onChange={(e) => update("academyName", e.target.value)}
              maxLength={150}
              placeholder="Champions Sports Academy"
            />
            {errors.academyName && <p className="text-xs text-destructive">{errors.academyName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bd-address">Academy address</Label>
            <Textarea
              id="bd-address"
              value={form.academyAddress}
              onChange={(e) => update("academyAddress", e.target.value)}
              maxLength={300}
              placeholder="Street, City, State"
              rows={2}
            />
            {errors.academyAddress && <p className="text-xs text-destructive">{errors.academyAddress}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bd-email">Email</Label>
            <Input
              id="bd-email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              maxLength={255}
              placeholder="you@academy.com"
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label>Preferred contact method</Label>
            <RadioGroup
              value={form.contactMethod}
              onValueChange={(v) => update("contactMethod", v as FormState["contactMethod"])}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem id="cm-email" value="email" />
                <Label htmlFor="cm-email" className="font-normal">Email</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id="cm-phone" value="phone" />
                <Label htmlFor="cm-phone" className="font-normal">Phone</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem id="cm-whatsapp" value="whatsapp" />
                <Label htmlFor="cm-whatsapp" className="font-normal">WhatsApp</Label>
              </div>
            </RadioGroup>
            {errors.contactMethod && <p className="text-xs text-destructive">{errors.contactMethod}</p>}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="btn-shine w-full bg-gradient-brand text-white shadow-button hover:opacity-95"
          >
            {submitting ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
            ) : (
              "Submit Request"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
