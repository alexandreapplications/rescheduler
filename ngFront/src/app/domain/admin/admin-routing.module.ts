import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MeetingRoomListComponent } from "./meeting-room/meeting-room-list/meeting-room-list.component";
import { MeetingRoomEditComponent } from "./meeting-room/meeting-room-edit/meeting-room-edit.component";

const routes: Routes = [
  { path: "meeting-places", component: MeetingRoomListComponent },
  { path: "meeting-place/:id", component: MeetingRoomEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
