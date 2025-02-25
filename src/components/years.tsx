import { useDatePickerContext } from "@rehookify/datepicker";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getYearsClassName } from "../classnames-utils";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import { Button } from "./button";

export const Years = () => {
  const {
    data: { years },
    propGetters: { previousYearsButton, nextYearsButton, yearButton },
  } = useDatePickerContext();

  return (
    <Section>
      <SectionHeader>
        <Button className="w-8" {...previousYearsButton()}>
          <ChevronLeft />
        </Button>
        <p className="text-center text-sm">
          {`${years[0].year} - ${years[years.length - 1].year}`}
        </p>
        <Button className="w-8" {...nextYearsButton()}>
          <ChevronRight />
        </Button>
      </SectionHeader>
      <main className="grid grid-cols-3 items-center gap-x-2 gap-y-2">
        {years.map((y) => (
          <Button
            key={y.$date.toString()}
            className={getYearsClassName("text-xs", y)}
            {...yearButton(y)}
          >
            {y.year}
          </Button>
        ))}
      </main>
    </Section>
  );
};
