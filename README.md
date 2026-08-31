Verify that the Chart component functions correctly when interacting with both external application controls and controls or functionality provided internally by the Chart component.

### Subcase 1 – External Component Integration

**Description:**
Verify that the Chart component correctly responds to and remains synchronized with controls external to the Chart component.

Timeline Navigation
Use the external Timeline control to navigate through the available time range.
Select multiple positions or time intervals within the Timeline.
Verify that the Chart updates to display the data corresponding to the selected time period.
Verify that the Chart remains synchronized with the Timeline throughout navigation.
Timeline Range Selection
Adjust the start and end points of the selected range using the Timeline control.
Increase and decrease the selected time range.
Verify that the Chart updates appropriately to reflect the selected range.
Verify that data outside the selected range is handled as expected.
External Filtering
Select an available external filter or application control that affects the data displayed by the Chart.
Modify the selected filter or control.
Verify that the Chart updates to reflect the selected criteria.
Restore the control to its original state and verify that the Chart returns to the expected display.
Repeated External Control Interaction
Perform multiple consecutive changes using the external controls.
Verify that the Chart updates correctly after each change.
Verify that the Chart remains responsive and does not display stale or inconsistent data.
Chart Interaction Following External Updates
Modify the Chart using an applicable external control.
After the Chart has updated, exercise applicable Chart interactions such as navigation, selection, or tooltips.
Verify that Chart functionality remains available and operates correctly after the external update.


### Subcase 2 – Native Chart Component Functionality

**Description:**
Perform the following actions to verify the functionality provided by the Chart component:

Export Chart Data
Select the Chart's export option.
Export the currently displayed Chart data using each supported export format.
Verify that each export operation completes successfully.
Open or review each exported file and verify that the expected Chart data is present and correctly formatted.
Import Chart Data
Select the Chart's import option.
Select a valid supported data file for import.
Complete the import operation.
Verify that the imported data is successfully loaded and correctly represented within the Chart.
Legend Controls
Display the Chart legend, if it is not already visible.
Select individual legend entries to enable or disable the corresponding data series.
Verify that the Chart updates appropriately based on the selected legend entries.
Chart Navigation
Use the available Chart navigation controls to navigate through the displayed data.
Exercise applicable zoom, pan, scroll, or reset controls.
Verify that the Chart view updates correctly for each navigation action.
Tooltips
Position the pointer over applicable Chart data points or graphical elements.
Verify that the appropriate tooltip is displayed.
Verify that the tooltip information corresponds to the selected Chart element.
Chart Selection
Select applicable data points, series, or other interactive Chart elements.
Verify that the Chart responds appropriately to each selection.
Verify that the selected element and any associated information are displayed correctly.
Zooming, panning, scrolling and resetting the charts position
