import threading


def fun1(i):
    threading.current_thread().setName("прр")
    # threading.current_thread().setDaemon(False)

    print(threading.Condition())
    print(threading.TIMEOUT_MAX)
    print(threading.active_count())
    print(threading.get_ident())
    # or print(threading.current_thread().ident)
    print(threading.get_native_id())
    # or print(threading.current_thread().native_id)
    print(threading.enumerate())

    print(threading.main_thread())
    print(threading.current_thread())

    print(threading.current_thread().name)
    print(threading.current_thread().is_alive())
    print(threading.current_thread().daemon)

    print("--------\n")


for each in range(10):
    t = threading.Thread(target=fun1, args=(each, ))
    t.start()
    t.join()
  #  threading.settrace(fun1(each))
  #  threading.setprofile(fun1(each))
