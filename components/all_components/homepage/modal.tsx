import React from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  className?: string;
}

export default function Modal({ className }: ModalProps) {
  return (
    <div aria-hidden="true" className={cn("uniloom-modal", className)} id="uniloom-pass-modal">
      <div className="uniloom-modal-panel">
        <button aria-label="Close dialog" className="uniloom-modal-close" data-uniloom-close="" type="button">
          ×
        </button>
        {" "}
        <p className="uniloom-modal-eyebrow">
          UNILOOM CONFERENCE PASSES
        </p>
        {" "}
        <h2 id="uniloom-modal-title">
          Student Pass
        </h2>
        {" "}
        <p className="uniloom-modal-copy">
          Complete your details to request this conference pass.
        </p>
        {" "}
        <form className="uniloom-purchase-form" id="uniloom-purchase-form">
          <div className="uniloom-form-field full">
            <label htmlFor="uniloom-selected-pass">
              Selected pass
            </label>
            {" "}
            <input id="uniloom-selected-pass" name="pass" readOnly defaultValue="Student Pass" />
          </div>
          {" "}
          <div className="uniloom-form-field">
            <label htmlFor="uniloom-full-name">
              Full name
            </label>
            {" "}
            <input autoComplete="name" id="uniloom-full-name" name="name" placeholder="Your full name" required />
          </div>
          {" "}
          <div className="uniloom-form-field">
            <label htmlFor="uniloom-email">
              Email address
            </label>
            {" "}
            <input autoComplete="email" id="uniloom-email" name="email" placeholder="you@example.com" required type="email" />
          </div>
          {" "}
          <div className="uniloom-form-field">
            <label htmlFor="uniloom-institution">
              University / institution
            </label>
            {" "}
            <input id="uniloom-institution" name="institution" placeholder="Your university" required />
          </div>
          {" "}
          <div className="uniloom-form-field">
            <label htmlFor="uniloom-quantity">
              Number of passes
            </label>
            {" "}
            <select id="uniloom-quantity" name="quantity">
              <option>
                1
              </option>
              {" "}
              <option>
                2
              </option>
              {" "}
              <option>
                3
              </option>
              {" "}
              <option>
                4
              </option>
              {" "}
              <option>
                5
              </option>
            </select>
          </div>
          {" "}
          <div className="uniloom-form-field full">
            <label htmlFor="uniloom-notes">
              Additional note (optional)
            </label>
            {" "}
            <textarea id="uniloom-notes" name="notes" placeholder="Anything the organizers should know?" rows={3} />
          </div>
          {" "}
          <p className="uniloom-form-note">
            This is a pass enquiry form only. Online payment and order confirmation are not connected yet.
          </p>
          {" "}
          <p aria-live="polite" className="uniloom-form-feedback" id="uniloom-form-feedback" />
          {" "}
          <button className="uniloom-modal-action" type="submit">
            Submit pass request
          </button>
        </form>
      </div>
    </div>
  );
}
