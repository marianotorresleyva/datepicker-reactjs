import { useDatePickerContext } from "@rehookify/datepicker";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { getMonthClassName } from "../classnames-utils";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import { Button } from "./button";

export const Months = () => {
  const {
    data: { months },
    propGetters: { subtractOffset, addOffset, monthButton },
  } = useDatePickerContext();

  const year = months[0].$date.getFullYear();

  return (
    <Section>
      <SectionHeader>
        <Button className="w-8" {...subtractOffset({ months: 1 })}>
          <ChevronLeft />
        </Button>
        <p className="text-center text-sm">{year}</p>
        <Button className="w-8" {...addOffset({ months: 1 })}>
          <ChevronRight />
        </Button>
      </SectionHeader>
      <main className="grid grid-cols-3 items-center gap-x-2 gap-y-2">
        {months.map((m) => (
          <Button
            key={m.month + year}
            className={getMonthClassName("text-xs", m)}
            {...monthButton(m)}
          >
            {m.month}
          </Button>
        ))}
      </main>
    </Section>
  );
};
