# Resource Scheduling

Website and backend allowing to anyone schedule a resource.

# Front End

# Backend

**/User**

**/Domain**
Default availability - Begin, End, Minor Time, Max Time
MustConfirm

**/ResourceType**
Manages the standard default types for this application along with its pictures such as

_Models_

1. ResourceTypeModel

- Id
- Domain
- Description
- HasMaxUsers
- Picture

_Apis_

- Standard crud with ResourceTypeModel

**/Resource/:domain**
Enlists the resources for this application

_Models_

1. Resource

- Id
- Domain
- Name
- InfrastructureDescription
- MaxUsers
- ResourceType
- Location
- Availability - Begin, End, Minor Time, Max Time
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
