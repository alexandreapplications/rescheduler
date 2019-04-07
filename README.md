# Resource Scheduling

Website and backend allowing to anyone schedule a resource.

# Front End

This application will have a front end allow all users to

- Confirm meeting participation
- Book a resource if authorized by the domain company
-

**/**
Initial page will explain the application propose, how to use, why subscribe.

# Backend

**/User**
Manages the user information

_Models_

1. CreateUserCommand
2. Roles

- IncludeRole
- RemoveRole

**/Domain**

- Default availability - Begin, End, Minor Time, Max Time
- MustConfirm
- Administrators
- Book users

**/ResourceType**
Manages the standard default types for this application along with its pictures such as

_Models_

1. ResourceTypeModel

- Id
- Domain
- Name
- HasMaxUsers
- Picture

_Apis_

- Standard crud with ResourceTypeModel

**/ResourceItem/:domain**
Enlists the resources for this application

_Models_

1. ResourceItem

- Id
- Domain
- Name
- InfrastructureDescription
- MaxUsers
- ResourceType
- Location
- Availability - Begin, End, Minor Time, Max Time
  - Second version
- Picture
- UsersToApprove
- UsersToNotify

_Apis_

- Standard crud with ResourceTypeModel

**/Booking/:domain**
Manages room booking

_Models_

1. MyBookingsCommand

- InitialDate
- FinalDate
- OnlyFuture
- NotRealized

2. AvailableResoucesCommand

- InitialDate
- FinalDate
- ResourceType

3. Book

- InitialDate
- Final
- InvitedUserList
- ConfirmedUserList
- PresentUserList
- ResourceList
- IsConfirmed
- IsApproved
