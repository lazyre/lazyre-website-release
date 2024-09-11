import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,cca2,idd,flags"
    );
    const data = await response.json();

    const countries = data.map((country: any) => ({
      value: country.cca2.toLowerCase(),
      label: country.name.common,
      code: country.idd.root + (country.idd.suffixes?.[0] || ""),
      flag: country.flags.svg,
    }));

    countries.sort((a: any, b: any) => a.label.localeCompare(b.label));

    return NextResponse.json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    return NextResponse.json(
      { error: "Failed to fetch countries" },
      { status: 500 }
    );
  }
}
