import { useState } from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors } from "tailwind.config";

import AppNativePicker from "./AppNativePicker";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";

export default function AppDatePickerInline({
  placeholder,
  label,
  date,
  onDateChange,
  maximumDate,
  minimumDate,
  icon,
  my0,
  time,
}: {
  placeholder: string;
  label: string;
  date: Date;
  onDateChange: (newDate: Date) => void;
  maximumDate: Date | undefined;
  minimumDate: Date | undefined;
  icon?: string;
  my0?: boolean;
  time?: boolean;
}) {
  const [day, setDay] = useState(date.getDate().toString());
  const [month, setMonth] = useState(date.getMonth().toString());
  const [year, setYear] = useState(date.getFullYear().toString());
  const [hour, setHour] = useState(date.getHours().toString());
  const [minute, setMinute] = useState(date.getMinutes().toString());
  const [ampm, setAmPm] = useState(date.getHours() >= 12 ? "PM" : "AM");

  return (
    <View className="flex-1">
      {label ? (
        <AppText className="text-mediumGray mx-3 mt-2 text-sm">{label}</AppText>
      ) : null}

      {time ? (
        <View>
          <AppNativePicker
            items={Array.from({ length: 12 }, (_, i) => i).map((hour) => ({
              label: hour.toString(),
              value: hour.toString(),
            }))}
            onItemSelect={(item) => {
              setHour(item.value);
              onDateChange(
                new Date(
                  date.setHours(
                    parseInt(item.value) + (ampm === "PM" ? 12 : 0),
                  ),
                ),
              );
            }}
            label={"Hour"}
            selectedItem={hour}
          />
          <AppNativePicker
            items={Array.from({ length: 10 }, (_, i) => i).map((minute) => ({
              label: (minute * 5).toString(),
              value: (minute * 5).toString(),
            }))}
            onItemSelect={(item) => {
              setMinute(item.value);
              onDateChange(new Date(date.setMinutes(parseInt(item.value))));
            }}
            label={"Minute"}
            selectedItem={minute}
          />
          <AppNativePicker
            items={[
              { label: "AM", value: "AM" },
              { label: "PM", value: "PM" },
            ]}
            onItemSelect={(item) => {
              setAmPm(item.value);
              onDateChange(
                new Date(
                  date.setHours(
                    parseInt(hour) + (item.value === "PM" ? 12 : 0),
                  ),
                ),
              );
            }}
            label={"AM/PM"}
            selectedItem={ampm}
          />
        </View>
      ) : (
        <View>
          <AppNativePicker
            items={Array.from(
              { length: getDaysInMonth(date.getFullYear(), date.getMonth()) },
              (_, i) => i + 1,
            ).map((day) => ({
              label: day.toString(),
              value: day.toString(),
            }))}
            onItemSelect={(item) => {
              setDay(item.value);
              onDateChange(new Date(date.setDate(parseInt(item.value))));
            }}
            label={"Day"}
            selectedItem={day}
          />
          <AppNativePicker
            items={Array.from({ length: 12 }, (_, i) => i).map((month) => ({
              label: getMonthName(month),
              value: month.toString(),
            }))}
            onItemSelect={(item) => {
              setMonth(item.value);
              onDateChange(new Date(date.setMonth(parseInt(item.value))));
            }}
            label={"Month"}
            selectedItem={month}
          />
          <AppNativePicker
            items={Array.from({ length: 10 }, (_, i) => i)
              .map((year) => date.getFullYear() + year)
              .map((year) => ({
                label: year.toString(),
                value: year.toString(),
              }))}
            onItemSelect={(item) => {
              setYear(item.value);
              onDateChange(new Date(date.setFullYear(parseInt(item.value))));
            }}
            label={"Year"}
            selectedItem={year}
          />
        </View>
      )}
    </View>
  );
}

const getMonthName = (monthNumber) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthNumber];
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};
