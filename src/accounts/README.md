## Domain Specific Folder

It can contain [components](components/README.md) [actions](actions/README.md) [reducers](reducers/README.md) folders.
It should contain one [routes.jsx](routes.jsx) file which can be used in a nested route structure.
If there are actions, components, reducers that needs to be reused by other routes (not a accounts/... route) then
 they should be moved up one folder. A child should never require a parent folder.
If possible the name of this folder should be related to the name of the route in which this component is mounted in the react route tree.  
  
