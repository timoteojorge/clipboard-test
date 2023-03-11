# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

 # Ticket 1: Enable custom ID creation for Facilities

Description: Add the ability for Facilities to save their own custom IDs for each Agent they work with, which can be used to identify the Agents on generated reports.

### Acceptance Criteria:

- Facilities can create a custom ID for each Agent they work with
- The custom ID is unique within the Facility
- The custom ID can be added, edited, or removed at any time
- Unit tests and E2E tests are written to make sure code is working as expected

Effort estimate: 6-8 hours

### Implementation details:

- Add a new column "custom_id" to the Agents table
- Add an API endpoint for Facilities to create/edit/delete custom IDs for Agents
- Add unit and E2E tests

# Ticket 2: update getShiftsByFacility to use custom ID

### Depends on 
- Ticket 1

Description: Modify the getShiftsByFacility function to include the custom ID of the assigned Agent when available.

### Acceptance Criteria:

- Modify the getShiftsByFacility function to include the custom ID of the assigned Agent
- Returned shifts contain the newly created custom ID for the agents
- Unit tests and E2E tests are written to make sure code is working as expected

Effort estimate: 4-6 hours

### Implementation details:

- Modify the generateReport function to use the custom ID instead of the internal database ID when available
- Update the report template to display the custom ID instead of the internal database ID
- Add unit and E2E tests

# Ticket 3: update generateReport to use custom ID

### Depends on 
- Ticket 1
- Ticket 2

Description: Modify the generateReport function to generate the reports based on the customID and to include the custom ID in the pdf report

### Acceptance Criteria:

- Modify the generateReport function to include the custom ID of the assigned Agent
- The custom ID of the assigned Agent is included in the generated report when available
- The report template is updated to display the custom ID instead of the internal database ID
- Unit tests and E2E tests are written to make sure code is working as expected

Effort estimate: 8-12 hours

### Implementation details:

- Modify the generateReport function to use the custom ID instead of the internal database ID when available
- Update the report template to display the custom ID instead of the internal database ID
- Add unit and E2E tests

# Ticket 4: Notify Facilities of custom ID feature

### Depends on 
- Ticket 1
- Ticket 2
- Ticket 3

Description: Notify Facilities of the new custom ID feature and provide instructions for creating, editing, and deleting custom IDs for Agents.

### Acceptance Criteria:

- Facilities are notified of the new custom ID feature
- Facilities receive clear instructions for creating, editing, and deleting custom IDs for Agents

Effort estimate: 2-3 hours

### Implementation details:

- Add a message to the Facilities dashboard notifying them of the new custom ID feature
- Provide clear instructions for creating, editing, and deleting custom IDs for Agents in the message


# Ticket 5: Update documentation

### Depends on 
- Ticket 1
- Ticket 2
- Ticket 3

Description: Update the documentation to reflect the new custom ID feature.

# Acceptance Criteria:

- The documentation is updated to include information on the custom ID feature
- The updated documentation is published and made available to Facilities

Effort estimate: 2-3 hours

### Implementation details:

- Add a section to the documentation explaining the custom ID feature
- Update any relevant screenshots and examples in the documentation
- Publish the updated documentation and make it available to Facilities.

