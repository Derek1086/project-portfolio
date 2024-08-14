import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactCard() {
  return (
    <Card className="mt-4 p-4">
      <CardHeader>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <CardTitle className="mt-4 mb-4">+1 512-635-9513</CardTitle>
          </div>
          <div className="w-full md:w-1/2">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <CardTitle className="mt-4 mb-4">
              derekavila1086@gmail.com
            </CardTitle>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
