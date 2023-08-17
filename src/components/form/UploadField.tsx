import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputProps } from "@/components/ui/input";
import { Image as ImageIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

interface TextFieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  inputProps?: InputProps;
  label: string;
  description?: string;
  errorMessage?: string;
  defaultImagePreview?: string;
}

export function UploadField<T extends FieldValues>({
  control,
  label,
  description,
  inputProps = {},
  errorMessage,
  name,
  defaultImagePreview = "",
  ...props
}: TextFieldProps<T>) {
  const [imagePreview, setImagePreview] = useState<string>(
    () => defaultImagePreview
  );

  return (
    <FormField
      name={name}
      {...props}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div>
              <div
                className="relative mt-1 flex justify-center rounded-lg 
                              border border-dashed border-gray-900/25 p-4"
              >
                {imagePreview && (
                  <TrashIcon
                    className="absolute right-6 bottom-5 cursor-pointer
                               w-5 h-5 text-red-500"
                    onClick={() => setImagePreview("")}
                  />
                )}
                <div className="flex flex-col items-center text-center">
                  {imagePreview ? (
                    <Image
                      src={imagePreview}
                      width={300}
                      height={300}
                      alt="document"
                    />
                  ) : (
                    <ImageIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                  )}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor={name}
                      className="relative cursor-pointer rounded-md 
                                 bg-white font-semibold text-primary-600 
                                 focus-within:outline-none 
                                 hover:text-primary-500"
                    >
                      <div>Upload file</div>
                      <input
                        id={name}
                        type="file"
                        className="sr-only"
                        ref={field.ref}
                        name={name}
                        onBlur={field.onBlur}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          field.onChange(e.target.files?.[0]);
                          if (file) {
                            setImagePreview(URL.createObjectURL(file));
                          }
                        }}
                      />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              <FormMessage />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
