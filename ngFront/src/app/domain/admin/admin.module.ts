import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MeetingRoomListComponent } from "./meeting-room/meeting-room-list/meeting-room-list.component";
import { MeetingRoomEditComponent } from "./meeting-room/meeting-room-edit/meeting-room-edit.component";
import { AdminRoutingModule } from "./admin-routing.module";

@NgModule({
  declarations: [MeetingRoomListComponent, MeetingRoomEditComponent],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
