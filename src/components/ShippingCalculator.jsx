import React, { useState } from "react";
import { Card, CardContent } from "./Card";

const ShippingCalculator = () => {
  const [boxes, setBoxes] = useState([
    { weight: "", unit: "g", l: "", b: "", h: "", count: 1 },
  ]);

  const addBox = () => {
    setBoxes([
      ...boxes,
      { weight: "", unit: "g", l: "", b: "", h: "", count: 1 },
    ]);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-emerald-500">—</span> Calculate Your Shipping Price
        </h2>

        <Card className="border-0 shadow-xl">
          <CardContent className="p-10">
            <form className="space-y-8">

              {/* BASIC DETAILS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Shipping Method" type="select" />
                <Field label="Status" type="select" />
                <Field label="Origin Pincode" placeholder="Ex. 813210" />
                <Field label="Destination Pincode" placeholder="Ex. 845401" />
                <Field label="COD Amount" placeholder="0" />
                <Field label="Payment Mode" type="select" />
                <Field label="Shipment Type" type="select" />
                <Field label="Invoice Amount" placeholder="0" />
              </div>

              {/* BOX DETAILS */}
              {boxes.map((_, index) => (
                <div
                  key={index}
                  className="bg-slate-100 rounded-lg p-4 grid grid-cols-2 md:grid-cols-6 gap-4"
                >
                  <SmallField label="Weight" />
                  <SmallSelect label="Unit" />
                  <SmallField label="L (cm)" />
                  <SmallField label="B (cm)" />
                  <SmallField label="H (cm)" />
                  <SmallField label="Count" placeholder="1" />
                </div>
              ))}

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={addBox}
                  className="border border-emerald-500 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50"
                >
                  Add More Boxes
                </button>

                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-10 py-3 rounded-full font-semibold hover:bg-emerald-600"
                >
                  Submit and Compare
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ShippingCalculator;

/* ---------------- HELPERS ---------------- */

const Field = ({ label, placeholder = "", type = "input" }) => (
  <div>
    <label className="block mb-2 font-medium text-slate-700">{label}</label>
    {type === "select" ? (
      <select className="w-full border rounded-md p-3">
        <option>Surface</option>
        <option>Express</option>
      </select>
    ) : (
      <input
        className="w-full border rounded-md p-3"
        placeholder={placeholder}
      />
    )}
  </div>
);

const SmallField = ({ label, placeholder = "0" }) => (
  <div>
    <label className="block text-sm mb-1">{label}</label>
    <input className="w-full border rounded-md p-2 text-sm" placeholder={placeholder} />
  </div>
);

const SmallSelect = ({ label }) => (
  <div>
    <label className="block text-sm mb-1">{label}</label>
    <select className="w-full border rounded-md p-2 text-sm">
      <option>g</option>
      <option>kg</option>
    </select>
  </div>
);
