import { Publisher, Subjects, TicketCreatedEvent } from "@edod-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
