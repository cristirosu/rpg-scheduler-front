import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private _notifications = [
    {
      name: 'Vlad',
      text: 'Vlad posted a new article.',
      time: '1 min ago'
    },
    {
      name: 'Kostya',
      text: 'Kostya changed his contact information.',
      time: '2 hrs ago'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      text: 'New orders received.',
      time: '5 hrs ago'
    },
    {
      name: 'Andrey',
      text: 'Andrey replied to your comment.',
      time: '1 day ago'
    },
    {
      name: 'Nasta',
      text: 'Today is Nasta\'s birthday.',
      time: '2 days ago'
    },
    {
      image: 'assets/img/comments.svg',
      text: 'New comments on your post.',
      time: '3 days ago'
    },
    {
      name: 'Kostya',
      text: 'Kostya invited you to join the event.',
      time: '1 week ago'
    }
  ];

  private _messages = [
    {
      name: 'Kostya',
      text: 'Want to request new features? Email us at rpg@scheduler.com!',
      time: '5 hours ago'
    },
    {
      name: 'Kostya',
      text: 'Notification engine is finally here! Go to settings to enable them!',
      time: '3 days ago'
    },
    {
      name: 'Kostya',
      text: 'Celebrate 1 year anniversary with us! Receive bonus xp for every task!',
      time: '2 weeks ago'
    }
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}
