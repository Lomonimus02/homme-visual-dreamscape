
import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const ConsultFormDialog = () => {
  const { register, handleSubmit, reset, formState } = useForm<FormData>({
    mode: "onSubmit",
  });

  const onSubmit = (data: FormData) => {
    // Здесь можно добавить логику для интеграции с бэкендом/почтой
    toast({
      title: "Спасибо за заявку!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="gold-btn text-xl md:text-2xl font-playfair inline-block shadow-xl px-10 py-4"
          style={{ boxShadow: "0px 8px 40px 0px #d3b47350" }}
        >
          Записаться на консультацию
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">
            Бесплатная консультация
          </DialogTitle>
          <DialogDescription>
            Заполните форму – мы свяжемся с вами в ближайшее время.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4 pt-1"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <div>
            <Input
              {...register("name", { required: "Введите ваше имя" })}
              placeholder="Имя*"
              required
              autoFocus
              className="text-base"
              disabled={formState.isSubmitting}
            />
          </div>
          <div>
            <Input
              {...register("email", {
                required: "Введите ваш email",
                pattern: {
                  value: /^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Введите корректный email",
                },
              })}
              placeholder="Электронная почта*"
              type="email"
              required
              className="text-base"
              disabled={formState.isSubmitting}
            />
          </div>
          <div>
            <Input
              {...register("phone", {
                required: "Введите номер телефона",
                minLength: { value: 10, message: "Слишком короткий номер" },
              })}
              placeholder="Телефон*"
              type="tel"
              required
              className="text-base"
              disabled={formState.isSubmitting}
            />
          </div>
          <div>
            <Textarea
              {...register("message")}
              placeholder="Сообщение (необязательно)"
              className="text-base min-h-[80px]"
              disabled={formState.isSubmitting}
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              size="lg"
              className="font-playfair"
              disabled={formState.isSubmitting}
            >
              {formState.isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
            <DialogClose asChild>
              <Button variant="ghost" type="button">
                Отмена
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultFormDialog;
