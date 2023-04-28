import { forwardRef, SVGProps } from "react";

export const Quote = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      width="29"
      height="23"
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.03125 0.109375L14 3.48438C11.0938 7.45313 9.59375 11.7344 9.5 16.3281V22.7031H0.875V17.2656C0.875 14.0781 1.625 10.9219 3.125 7.79688C4.65625 4.67187 6.625 2.10938 9.03125 0.109375ZM23.7969 0.109375L28.7656 3.48438C25.8594 7.45313 24.3594 11.7344 24.2656 16.3281V22.7031H15.6406V17.2656C15.6406 14.0781 16.3906 10.9219 17.8906 7.79688C19.4219 4.67187 21.3906 2.10938 23.7969 0.109375Z"
        fill="currentColor"
      />
    </svg>
  )
);

Quote.displayName = "Quote";
