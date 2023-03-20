# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Here are three possible tickets to break down the original ticket:

- **Ticket 1: Add custom Agent ID field to the Facilities table**

  - **Description:**
    Add a new column to the Facilities table to allow Facilities to save their own custom IDs for Agents.
  - **Acceptance Criteria:**
    A new column named custom_agent_id is added to the Facilities table.
    The custom_agent_id column can be updated by Facilities through the UI.
  - **Implementation Details:**
    Modify the Facilities table schema in the database.
    Add the custom_agent_id field to the UI for Facilities to input and edit.
  - **Effort Estimate:** 3-5 hours

- **Ticket 2: Store custom Agent ID with each Shift worked**

  - **Description:**
    Modify the Shifts table to store the custom Agent ID provided by the Facility in addition to the existing internal Agent ID.
  - **Acceptance Criteria:**
    A new column named custom_agent_id is added to the Shifts table.
    The custom_agent_id field is populated with the custom Agent ID provided by the Facility.
  - **Implementation Details:**
    Modify the Shifts table schema in the database.
    Update the code that creates and updates Shifts to include the custom_agent_id field.
  - **Effort Estimate:** 2-4 hours

- **Ticket 3: Use custom Agent ID when generating reports**

  - **Description:**
    Modify the generateReport function to use the custom Agent ID provided by Facilities in the report instead of the internal database ID.
  - **Acceptance Criteria:**
    The generateReport function uses the custom Agent ID provided by Facilities in the report.
    The report includes both the internal database ID and the custom Agent ID.
  - **Implementation Details:**
    Modify the generateReport function to use the custom_agent_id field instead of the internal Agent ID when creating the report.
    Update the report template to include both the internal database ID and the custom Agent ID.
  - **Effort Estimate:** 4-6 hours
