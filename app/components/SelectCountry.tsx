import { getCountries } from "@/app/lib/data-service";

type SelectCountryPropTypes = {
  defaultCountry: string;
  name: string;
  id: number;
  className: string;
};

async function SelectCountry({
  defaultCountry,
  name,
  id,
  className,
}: SelectCountryPropTypes) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
