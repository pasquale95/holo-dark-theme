import 'dart:async';

enum Status { idle, running, done }

class Service {
  final String name;
  final StreamController<Status> _controller = StreamController.broadcast();

  Service(this.name);

  Stream<Status> get stream => _controller.stream;

  Future<void> run() async {
    _controller.add(Status.running);
    await Future.delayed(const Duration(seconds: 1));
    _controller.add(Status.done);
  }
}

void main() async {
  final svc = Service('worker');
  svc.stream.listen(print);
  await svc.run();
}

// Line comment
/// Doc comment for Service
/* Block comment */
