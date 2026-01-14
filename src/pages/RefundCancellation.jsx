import React from "react";

const RefundCancellation = () => {
  return (
    <div className="bg-white">
      <div className="pt-24 px-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center">
          Refund & Cancellation Policy
        </h1>

        <p className="text-gray-600 mb-6">
          At <strong>Shopy Courier</strong>, we aim to provide reliable and
          efficient courier and logistics services. This Refund & Cancellation
          Policy explains when cancellations, refunds, or compensation may be
          applicable.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Cancellation of Shipments
            </h2>
            <p className="text-gray-600">
              Shipments can be canceled <strong>only before pickup is completed</strong>.
              Once the courier has picked up the package, cancellation requests
              will not be accepted.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>
                Cancellation requests must be made through your account
                dashboard or by contacting customer support.
              </li>
              <li>
                Any service or processing fees incurred before cancellation may
                be non-refundable.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Refund Eligibility
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>The shipment is canceled before pickup.</li>
              <li>
                A duplicate payment or incorrect charge occurs due to a system
                or technical error.
              </li>
              <li>
                Shopy Courier is unable to provide the service due to internal
                operational issues.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Non-Refundable Situations
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-1">
              <li>The shipment has already been picked up or is in transit.</li>
              <li>
                Delays caused by customs clearance, weather conditions,
                strikes, natural disasters, or third-party logistics partners.
              </li>
              <li>
                Incorrect or incomplete shipment details provided by the user.
              </li>
              <li>
                Shipments restricted, delayed, or confiscated by government or
                customs authorities.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Refund Processing Time
            </h2>
            <p className="text-gray-600">
              Approved refunds will be processed within{" "}
              <strong>7–10 business days</strong> and credited to the original
              payment method used at the time of booking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Damaged or Lost Shipments
            </h2>
            <p className="text-gray-600">
              In the event of damage or loss, compensation may be considered
              based on the declared value of the shipment, supporting documents
              (such as invoices and photographs), and the outcome of
              investigations conducted by Shopy Courier and its logistics
              partners. Compensation is subject to applicable policies and
              third-party carrier terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              Shopy Courier reserves the right to update or modify this Refund &
              Cancellation Policy at any time. Any changes will be effective
              immediately upon being posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Contact Information
            </h2>
            <p className="text-gray-600">
              For cancellation, refund, or compensation-related queries, please
              contact us at{" "}
              <a
                href="mailto:support@shopycourier.com"
                className="text-blue-600 underline"
              >
                support@shopycourier.com
              </a>
            </p>
          </div>
        </section>

        {/* <p className="text-sm text-gray-500 mt-10">
          Last updated: 12/01/2026
        </p> */}
      </div>
    </div>
  );
};

export default RefundCancellation;
