import { Dialog, Transition } from "@headlessui/react";
import { modalState } from "atoms/modalAtom";
import { isPossiblePhoneNumber } from "libphonenumber-js/min";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import "react-phone-number-input/style.css";
import { useRecoilState } from "recoil";
// import { useMutation } from "react-query";
// import { formatPhoneNumber } from "react-phone-number-input";

const Modal = ({ isDark }) => {
  const [open, setOpen] = useRecoilState(modalState);
  const {
    register,
    handleSubmit,
    // reset,
    control,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  // const { mutateAsync, isError } = useMutation(
  //   (newMessage) =>
  //     fetch("/api/mail", {
  //       method: "POST",
  //       body: JSON.stringify(newMessage),
  //     }),
  //   {
  //     onSuccess: () => {
  //       setOpen(false);
  //       reset();
  //     },
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   }
  // );

  // async function onSubmit(data) {
  //   const { name, email, phone, message } = data;

  //   const newMessage = {
  //     name,
  //     email,
  //     phone: formatPhoneNumber(phone),
  //     message,
  //   };

  //   mutateAsync(newMessage);
  // }

  const onSubmit = () => {};

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opactiy-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={`${
                isDark ? "bg-stone-900 text-gray-400" : "bg-white text-gray-500"
              } font-fancy inline-block align-middle rounded-xl
                            px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-8 sm:max-w-sm sm:w-full sm:p-6`}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-1"
              >
                <div className="inputWrapper">
                  <label className="formLabel" htmlFor="first">
                    First Name
                  </label>
                  <input
                    {...register("first", {
                      required: "REQUIRED",
                      minLength: {
                        value: 2,
                        message: "MORE THAN 2 CHARACTERS",
                      },
                      maxLength: {
                        value: 30,
                        message: "LESS THAN 30 CHARACTERS",
                      },
                    })}
                    placeholder="John"
                    className={`${isDark ? "formInputDark" : "formInput"}`}
                    type="text"
                    name="first"
                    id="first"
                  />
                  <span className="formErrorMsg">{errors.first?.message}</span>
                </div>
                <div className="inputWrapper">
                  <label className="formLabel" htmlFor="last">
                    Last Name
                  </label>
                  <input
                    {...register("last", {
                      required: "REQUIRED",
                      minLength: {
                        value: 2,
                        message: "MORE THAN 2 CHARACTERS",
                      },
                      maxLength: {
                        value: 30,
                        message: "LESS THAN 30 CHARACTERS",
                      },
                    })}
                    placeholder="Doe"
                    className={`${isDark ? "formInputDark" : "formInput"}`}
                    type="text"
                    name="last"
                    id="last"
                  />
                  <span className="formErrorMsg">{errors.last?.message}</span>
                </div>
                <div className="inputWrapper">
                  <label className="formLabel" htmlFor="Phone">
                    Phone
                  </label>
                  <PhoneInput
                    placeholder="(555) 555-5555"
                    className={`${isDark ? "formInputDark" : "formInput"}`}
                    name="phone"
                    control={control}
                    rules={{
                      required: "REQUIRED",
                      validate: (value) =>
                        isPossiblePhoneNumber(value) ||
                        "VALID PHONE IS REQUIRED",
                    }}
                    country="US"
                  />
                  <span className="formErrorMsg">{errors.phone?.message}</span>
                </div>
                <div className="inputWrapper">
                  <label className="formLabel" htmlFor="Email">
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "REQUIRED",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "VALID EMAIL IS REQUIRED",
                      },
                    })}
                    placeholder="johndoe@example.com"
                    className={`${isDark ? "formInputDark" : "formInput"}`}
                    type="text"
                    name="email"
                    id="email"
                  />
                  <span className="formErrorMsg">{errors.email?.message}</span>
                </div>
                <div className="inputWrapper">
                  <label className="formLabel" htmlFor="Message">
                    Message
                  </label>
                  <textarea
                    {...register("message", {
                      required: "REQUIRED",
                      minLength: {
                        value: 5,
                        message: "MORE THAN 5 CHARACTERS",
                      },
                      maxLength: {
                        value: 500,
                        message: "LESS THAN 500 CHARACTERS",
                      },
                    })}
                    placeholder="How do I get started on Testosterone and HGH therapy?"
                    className={`${isDark ? "formInputDark" : "formInput"}`}
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                  />
                  <span className="formErrorMsg">
                    {errors.message?.message}
                  </span>
                </div>

                <button type="submit" className="formSubmitBtn">
                  Submit
                </button>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
