import React from "react";
import { cn } from "@/lib/utils";

interface ProgrammeProps {
  className?: string;
}

export default function Programme({ className }: ProgrammeProps) {
  return (
    <section aria-label="UNILOOM conference programme" className={cn("uniloom-europa-programme", className)} id="programme">
      <div className="uniloom-eu-programme-inner">
        <div className="uniloom-eu-programme-header">
          <div>
            <span className="uniloom-eu-programme-kicker">
              THE CONFERENCE PROGRAMME
            </span>
            {" "}
            <h2>
              Two days.{" "}
              <span>
                Ideas into action.
              </span>
            </h2>
          </div>
          {" "}
          <p>
            A proposed programme built around discovery, practical learning and the connections that help campus ideas move forward.
          </p>
        </div>
        {" "}
        <div aria-label="Choose conference day" className="uniloom-eu-programme-tabs" role="tablist">
          <button aria-controls="uniloom-day1-panel" aria-selected="true" className="uniloom-eu-day-tab is-active" id="uniloom-day1-tab" role="tab" type="button">
            <small>
              DAY 01
            </small>
            <strong>
              Discover &amp; Connect
            </strong>
          </button>
          {" "}
          <button aria-controls="uniloom-day2-panel" aria-selected="false" className="uniloom-eu-day-tab" id="uniloom-day2-tab" role="tab" type="button">
            <small>
              DAY 02
            </small>
            <strong>
              Build &amp; Move Forward
            </strong>
          </button>
        </div>
        {" "}
        <div aria-labelledby="uniloom-day1-tab" className="uniloom-eu-agenda-panel" id="uniloom-day1-panel" role="tabpanel">
          <div className="uniloom-eu-agenda-day">
            <span>
              DAY 01 / DISCOVER &amp; CONNECT
            </span>
            <span>
              Draft schedule · timings to be confirmed
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              09:00–09:30
            </div>
            {" "}
            <div>
              <h3>
                Arrival &amp; Campus Coffee
              </h3>
              {" "}
              <p>
                Meet fellow students, researchers and early-stage builders.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              NETWORKING
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              09:30–10:00
            </div>
            {" "}
            <div>
              <h3>
                Welcome to UNILOOM
              </h3>
              {" "}
              <p>
                Set the context for turning promising campus ideas into real ventures.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              OPENING
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              10:00–10:45
            </div>
            {" "}
            <div>
              <h3>
                Finding Problems Worth Solving
              </h3>
              {" "}
              <p>
                Explore observation, user needs and the first signals of a valuable idea.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              KEYNOTE
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              11:00–11:45
            </div>
            {" "}
            <div>
              <h3>
                From Research to Venture
              </h3>
              {" "}
              <p>
                Consider how research, prototypes and interdisciplinary skills can move toward application.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              DISCUSSION
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              12:00–13:00
            </div>
            {" "}
            <div>
              <h3>
                Founder Stories &amp; Lunch
              </h3>
              {" "}
              <p>
                Exchange early lessons and connect across the campus ecosystem.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              COMMUNITY
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              14:00–15:15
            </div>
            {" "}
            <div>
              <h3>
                Prototype, Test, Learn
              </h3>
              {" "}
              <p>
                Work through simple ways to test assumptions before building too much.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              WORKSHOP
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              15:30–16:30
            </div>
            {" "}
            <div>
              <h3>
                Meet the Startup Ecosystem
              </h3>
              {" "}
              <p>
                Connect with mentors, incubator communities and people who support new ventures.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              NETWORKING
            </span>
          </div>
        </div>
        {" "}
        <div aria-labelledby="uniloom-day2-tab" className="uniloom-eu-agenda-panel" hidden id="uniloom-day2-panel" role="tabpanel">
          <div className="uniloom-eu-agenda-day">
            <span>
              DAY 02 / BUILD &amp; MOVE FORWARD
            </span>
            <span>
              Draft schedule · timings to be confirmed
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              09:00–09:30
            </div>
            {" "}
            <div>
              <h3>
                Morning Connections
              </h3>
              {" "}
              <p>
                Reconnect with teams and identify the questions to take into day two.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              NETWORKING
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              09:30–10:15
            </div>
            {" "}
            <div>
              <h3>
                Building a Strong First Product
              </h3>
              {" "}
              <p>
                Connect customer insight, product choices and a focused first release.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              KEYNOTE
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              10:30–11:15
            </div>
            {" "}
            <div>
              <h3>
                Funding the First Steps
              </h3>
              {" "}
              <p>
                Understand early funding pathways, pitching and preparing for investor conversations.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              DISCUSSION
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              11:30–12:30
            </div>
            {" "}
            <div>
              <h3>
                Build Your Venture Roadmap
              </h3>
              {" "}
              <p>
                Turn a broad ambition into a clear next milestone and a practical plan.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              WORKSHOP
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              13:30–14:30
            </div>
            {" "}
            <div>
              <h3>
                Campus Startup Showcase
              </h3>
              {" "}
              <p>
                Explore concept-stage projects and the problems teams are working to solve.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              SHOWCASE
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              14:45–15:30
            </div>
            {" "}
            <div>
              <h3>
                Mentor Conversations
              </h3>
              {" "}
              <p>
                Bring a challenge, compare perspectives and identify useful next steps.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              MENTORING
            </span>
          </div>
          {" "}
          <div className="uniloom-eu-agenda-row">
            <div className="uniloom-eu-agenda-time">
              15:30–16:00
            </div>
            {" "}
            <div>
              <h3>
                Closing: What Happens Next?
              </h3>
              {" "}
              <p>
                Capture one priority, one connection and one action to take beyond the conference.
              </p>
            </div>
            <span className="uniloom-eu-agenda-type">
              CLOSING
            </span>
          </div>
        </div>
        {" "}
        <p className="uniloom-eu-programme-note">
          This is an illustrative programme concept. Event dates, session timings, speakers and delivery details are not confirmed and must be approved by the organizers.
        </p>
      </div>
    </section>
  );
}
