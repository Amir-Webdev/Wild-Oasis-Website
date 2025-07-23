// import { eachDayOfInterval } from "date-fns";
import supabase from "./supabase";
import logger from "./logger";
import { CabinSchema, CabinsSchema, CabinType } from "../types/cabin";

/////////////
// GET

export async function getCabin(id: number): Promise<CabinType> {
  const { data: cabin, error: supabaseError } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  // For testing
  // await new Promise((res) => setTimeout(res, 1000));

  if (supabaseError) {
    logger(supabaseError);
    throw new Error("خطا در بارگذاری اطلاعات کابین");
  }

  const result = CabinSchema.safeParse(cabin);

  const { success, data: parsedCabin, error: zodError } = result;

  if (!success || zodError) {
    logger(zodError);
    throw new Error("خطا در اعتبارسنجی اطلاعات کابین");
  }

  return parsedCabin;
}

export async function getCabinPrice(
  id: number
): Promise<{ regularPrice: number; discount: number }> {
  const { data: cabin, error: supabaseError } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (supabaseError) {
    logger(supabaseError);
    throw new Error("خطا در بارگذاری کابین");
  }

  const result = CabinSchema.safeParse(cabin);

  const { success, data: parsedCabin, error: zodError } = result;

  if (!success || zodError) {
    logger(zodError);
    throw new Error("خطا در اعتبارسنجی اطلاعات کابین");
  }

  const { regularPrice, discount } = parsedCabin;

  return { regularPrice, discount };
}

export const getCabins = async function (): Promise<CabinType[]> {
  const { data: cabins, error: supabaseError } = await supabase
    .from("cabins")
    .select("*")
    .order("name");

  if (supabaseError) {
    logger(supabaseError);
    throw new Error("خطا در بارگذاری کابین ها");
  }

  const result = CabinsSchema.safeParse(cabins);

  const { success, data: parsedCabins, error: zodError } = result;

  if (!success || zodError) {
    logger(zodError);
    throw new Error("خطا در اعتبارسنجی اطلاعات کابین ها");
  }

  return parsedCabins;
};

/*
// Guests are uniquely identified by their email address
export async function getGuest(email) {
  const { data, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function getBooking(id) {
  const { data, error, count } = await supabase
    .from("bookings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function getBookings(guestId) {
  const { data, error, count } = await supabase
    .from("bookings")
    // We actually also need data on the cabins as well. But let's ONLY take the data that we actually need, in order to reduce downloaded data.
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)"
    )
    .eq("guestId", guestId)
    .order("startDate");

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}

export async function getBookedDatesByCabinId(cabinId) {
  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  // Getting all bookings
  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag"
    );
    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("Could not fetch countries");
  }
}

/////////////
// CREATE

export async function createGuest(newGuest) {
  const { data, error } = await supabase.from("guests").insert([newGuest]);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be created");
  }

  return data;
}

export async function createBooking(newBooking) {
  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  return data;
}

/////////////
// UPDATE

// The updatedFields is an object which should ONLY contain the updated data
export async function updateGuest(id, updatedFields) {
  const { data, error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }
  return data;
}

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

/////////////
// DELETE

export async function deleteBooking(id) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  return data;
}
*/
