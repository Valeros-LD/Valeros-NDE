type ConfigRowTitleProps = {
  label?: string;
};

export function ConfigRowTitle({ label }: ConfigRowTitleProps) {
  if (!label) {
    return null;
  }

  return (
    <h3 className="text-lg font-semibold text-base-content mb-2">{label}</h3>
  );
}
