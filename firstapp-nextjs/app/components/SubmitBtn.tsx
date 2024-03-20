import { useFormStatus } from "react-dom";

const SubmitBtn: React.FC<{ btnLabel: string; pendingLabel: string }> = ({
  btnLabel,
  pendingLabel,
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="border bg-blue-500 text-white italic p-2 rounded-md"
    >
      {pending ? pendingLabel : btnLabel}
    </button>
  );
};
export default SubmitBtn;
