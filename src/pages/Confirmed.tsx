import {
  Title,
  CheckIcon,
  SuccessCheckmark,
  IconLine,
  IconCircle,
  IconFix,
  StartButton,
} from "../components/ui";

export default function Confirmed({ setRoute }: { setRoute: () => void }) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <Title
        style={{
          color: "#512da8",
        }}
      >
        Tip Sent Successfully
      </Title>
      <SuccessCheckmark>
        <CheckIcon>
          <IconLine className="line-tip"></IconLine>
          <IconLine className="line-long"></IconLine>
          <IconCircle></IconCircle>
          <IconFix></IconFix>
        </CheckIcon>
      </SuccessCheckmark>
      <StartButton onClick={setRoute}>Send Another Tip</StartButton>
    </div>
  );
}
