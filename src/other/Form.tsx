import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

interface ShippingFields {
  email: string;
  name: string;
  address: Address;
}

interface Address {
  country: string;
  city: string;
  street: string;
  house: string;
}

interface Option {
  value: string;
  label: string;
}

export const options: Option[] = [
  {
    value: "russia",
    label: "Russia",
  },
  {
    value: "china",
    label: "China",
  },
  {
    value: "usa",
    label: "USA",
  },
  {
    value: "new-zeeland",
    label: "New Zeeland",
  },
];

export const getValue = (value: string) =>
  value ? options.find((option) => option.value === value) : "";

const Form: React.FC<{ display?: boolean }> = ({ display = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    watch,
    control,
  } = useForm<ShippingFields>({
    mode: "onChange",
  });

  console.log(watch("name"));

  const onSubmit: SubmitHandler<ShippingFields> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div style={{ textAlign: "center", display: display ? "block" : "none" }}>
      {String(isValid)} {String(isDirty)}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-[100%]">
          <input
            {...register("name", {
              required: "Name req",
            })}
            placeholder="name"
          />
          {errors?.name && <div>{errors.name.message}</div>}

          <input
            {...register("email", {
              required: "Email req",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter valid email!",
              },
            })}
            placeholder="email"
          />
          {errors?.email && (
            <div style={{ color: "red", marginBottom: 10 }}>
              {errors.email.message}
            </div>
          )}

          <input
            {...register("address.city", {
              required: "City req",
            })}
            placeholder="City"
          />
          {errors?.address?.city && <div>{errors.address.city.message}</div>}

          <input
            {...register("address.street", {
              required: "Street req",
            })}
            placeholder="Street"
          />
          {errors?.address?.street && (
            <div>{errors.address.street.message}</div>
          )}

          <input
            {...register("address.house", {
              required: "House req",
            })}
            placeholder="House"
          />
          {errors?.address?.house && (
            <div style={{ color: "red", marginBottom: 10 }}>
              {errors.address.house.message}
            </div>
          )}
        </div>

        <Controller
          control={control}
          name="address.country"
          rules={{
            required: "Country req",
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <ReactSelect
                placeholder="Countries"
                options={options}
                value={getValue(value)}
                onChange={(newValue) => onChange((newValue as Option).value)}
              />
              {error && <div>{error.message}</div>}
            </div>
          )}
        />

        <button disabled={!isValid}>Send</button>
      </form>
    </div>
  );
};

export default Form;
