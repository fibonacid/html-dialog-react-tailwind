# html-dialog-react-tailwind

Code repository for the article [Taming the HTML dialog with React and TailwindCSS](https://dev.to/fibonacid/taming-the-html-dialog-with-react-and-tailwindcss-5hec)

<iframe src="https://html-dialog-react-tailwind-fibonacid.vercel.app" width="500" height="300" style="background: white"></iframe>

## Install dependencies

The component uses `tailwind-merge` to merge the TailwindCSS classes with the ones passed as props.

```bash
npm i tailwind-merge
# yarn add tailwind-merge
# pnpm add tailwind-merge
```
> If you don't need this feature, you can skip installing the dependency and remove `twMerge` from the `className` prop in the `Modal` component.

## Copy the Modal component

Run the following command to copy the Modal component to your project:

```bash
npx degit \
   fibonacid/html-dialog-react-tailwind/src/Step3.tsx \
   ./Modal.tsx
```

If you don't need the animation, you can copy the `step-2.tsx` file instead.

If you don't need the TailwindCSS classes, you can copy the `step-1.tsx` file instead.

