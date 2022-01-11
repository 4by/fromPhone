import multiprocessing


def fun1(i):
   # multiprocessing.current_process().setName("прр")
   # print(multiprocessing.Condition())

    print(multiprocessing.current_process())
    print(multiprocessing.parent_process())
    print(multiprocessing.current_process().name)
    print(multiprocessing.current_process().is_alive())
    print(multiprocessing.current_process().daemon)
    print(multiprocessing.current_process().pid)
    print(multiprocessing.current_process().exitcode)
    print(multiprocessing.current_process().authkey)
    print(multiprocessing.current_process().terminate)
    print(multiprocessing.current_process().kill)
    print(multiprocessing.current_process().close())
    print(multiprocessing.active_children())
    print(multiprocessing.cpu_count())
    print(multiprocessing.freeze_support())
    print(multiprocessing.get_all_start_methods())
    print(multiprocessing.Manager())
    print(multiprocessing.get_logger())
    print(multiprocessing.log_to_stderr())

    print("--------\n")


for each in range(10):
    t = multiprocessing.Process(target=fun1, args=(each, ))
    t.start()

    t.join()
